import { useFieldArray, useForm } from "react-hook-form"


export const EducationForm = () => {
    const {
        register,
        handleSubmit,
        watch,control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cart: [{ name: '', amount: 0 }]
        }
    })

    const { fields, append,prepend ,remove } = useFieldArray({
        control, name: "cart"
    })
    const onSubmit = (data) => console.log(data)
    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    fields.map((field,index)=><section key={field.id}>
                         <div className="flex flex-col gap-2">
                    <label htmlFor="">Name</label>
                    <input
                        className="input"  
                        {...register(`cart${index}.name`)}
                        type="text" />
                     </div>
                         <div className="flex flex-col gap-2 py-2">
                    <label htmlFor="">Amount</label>
                    <input
                        className="input"  
                        {...register(`cart${index}.amount`)}
                        type="text" />
                     </div>
                    </section>)
                }
               <button type="button"
               onClick={()=>{append({
                name:"Lighter"
                ,
                amount:2
               })}} className="btn btn-active">Add More</button>

                {/* <button type="submit"
                    className="btn bg-pink-500 text-white">
                    Submit</button> */}
            </form>

        </div>
    )
}
