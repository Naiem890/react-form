import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <div className="bg-[#f5f5f5] py-16">
      <form
        action=""
        className="max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-xl underline font-bold">Receipt Details</h3>
        <div className="grid grid-cols-3 items-center mt-4 gap-y-3">
          <label class="col-span-1">
            <p class="text-base font-medium">
              Date<span className="text-red-500">*</span>
            </p>
          </label>
          <div className="col-span-2">
            <input
              type="text"
              {...register("date", { required: true })}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Enter Date"
              class="input rounded-md font-medium bg-transparent text-[#404040] border-[#999a9a] input-sm input-bordered w-1/2"
            />
          </div>
          <label class="col-span-1">
            <p class="text-base font-medium">
              Amount<span className="text-red-500">*</span>
            </p>
          </label>
          <div className="col-span-2">
            <input
              type="number"
              {...register("amount", { required: true })}
              placeholder="Enter Amount (int INR)"
              class="input rounded-md font-medium bg-transparent text-[#404040] border-[#999a9a] input-sm input-bordered w-full "
            />
          </div>
          <label class="col-span-1">
            <p class="text-base font-medium">
              Payment Mode<span className="text-red-500">*</span>
            </p>
          </label>
          <div className="col-span-2">
            <select
              class="select  rounded-md font-medium bg-transparent text-[#404040] border-[#999a9a] select-sm select-bordered w-full max-w-xs"
              {...register("paymentMode", { required: true })}
            >
              <option selected>Cash</option>
              <option>PayTM</option>
              <option>Google Pay</option>
              <option>Visa Card</option>
            </select>
          </div>
          <label class="col-span-1">
            <p class="text-base font-medium">Remark</p>
          </label>
          <div className="col-span-2">
            <input
              type="text"
              {...register("remark", { required: true })}
              placeholder="Enter remark"
              class="input rounded-md font-medium bg-transparent text-[#404040] border-[#999a9a] input-sm input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <div className="flex gap-16">
            <button
              class="btn btn-outline uppercase flex flex-col w-36 h-16 hover:bg-red-700 hover:border-transparent gap-2  justify-center items-center font-medium border-2 border-red-200 text-red-600"
              onClick={() => reset()}
            >
              <span>Cancel</span>
              <span className="text-xs font-medium">(ESC)</span>
            </button>
            <button
              class="btn bg-[#477340] uppercase flex flex-col w-36 h-16 border-transparent hover:border-green-600 hover:bg-white hover:text-green-600 gap-2  justify-center items-center font-medium border-2 text-white"
              type="submit"
            >
              <span>Cancel</span>
              <span className="text-xs font-medium">(ESC)</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
