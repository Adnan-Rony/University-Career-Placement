import interviewModel from "../models/interview.model.js";


export const scheduleInterview = async (req, res) => {
  try {
    const { jobId, candidateId, scheduledAt, mode, locationOrLink, notes } = req.body;
    const employerId = req.user.id;

    const interview = await interviewModel.create({
      jobId,
      candidateId,
      employerId,
      scheduledAt,
      mode,
      locationOrLink,
      notes,
    });

    res.status(201).json({ success: true, interview });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Interview scheduling failed', error: error.message });
  }
};

export const getEmployerInterviews = async (req, res) => {
  try {
    const employerId = req.user.id;
    const interviews = await interviewModel.find({ employerId })
      .populate('candidateId', 'name email')
      .populate('jobId', 'title');

    res.status(200).json({ success: true, interviews });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch interviews', error: error.message });
  }
}

export const updateInterviewStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const interview = await interviewModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!interview) return res.status(404).json({ success: false, message: 'Interview not found' });

    res.status(200).json({ success: true, interview });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Status update failed', error: error.message });
  }
};
