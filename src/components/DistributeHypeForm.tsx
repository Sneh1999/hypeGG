import { HypeForm } from "@/constants/constants";
import { useCreateHypeStore } from "@/stores/CreateHypeStore";
import React from "react";
import { toast } from "react-toastify";
import { MdCloudDone } from "react-icons/md";

const DistributeHypeForm = () => {
  const createHypeStore = useCreateHypeStore();

  const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) {
      return toast.error("No file uploaded");
    }

    const file = e.target.files![0];

    // 2 MB = 2 * 1024 * 1024
    const maxFileSize = 2 * 1024 * 1024;
    if (file.size > maxFileSize) {
      return toast.error("Max image size is 2MB");
    }

    const objectUrl = URL.createObjectURL(file);

    createHypeStore.setCSV(objectUrl);
  };

  return (
    <div className="mx-auto mt-20  flex items-center justify-center gap-40">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">
          Distribute HypeGG
        </h1>
        <h3 className="pt-2 text-base font-medium text-[#00000080]">
          who can claim Hype
        </h3>
        <h2 className="py-2  text-base font-medium text-[#020B1A]">Address</h2>
        <div className="flex items-center justify-center">
          <label
            htmlFor="csvUpload"
            className=" h-20  w-96 cursor-pointer rounded-lg bg-[#E3E3FC] text-center text-[#020B1A] hover:opacity-70"
          >
            {createHypeStore.csv == "" ? (
              <div className="text-center">Upload CSV with Addresses</div>
            ) : (
              <MdCloudDone className=" h-14 w-14 text-center text-green-600" />
            )}
          </label>
          <input
            id="csvUpload"
            name="csvUpload"
            className="hidden"
            type="file"
            accept="text/csv"
            onChange={handleCSVUpload}
          />
        </div>
        <div className="flex justify-between">
          <button
            className=" float-right mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70"
            onClick={() => createHypeStore.setForm(HypeForm.CREATE_HYPE)}
          >
            Back
          </button>
          <button
            className=" float-right mt-4 rounded-2xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70"
            onClick={() => createHypeStore.setForm(HypeForm.REVIEW_HYPE)}
          >
            Next
          </button>
        </div>
      </div>

      <div className="relative min-h-[18rem] w-96 skew-x-6">
        <div className="absolute flex min-h-[18rem] w-96 flex-col rounded-xl  bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] py-2 px-4 text-white shadow-[inset_1px_4px_6px_2px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-4 -top-4 flex min-h-[18rem] w-96 flex-col gap-10 rounded-xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] py-2 px-4 text-white shadow-[inset_1px_4px_6px_2px_rgba(0,0,0,0.3)]">
          <h1 className="text-lg font-extrabold">
            {createHypeStore.collection}
          </h1>

          <div className="flex items-center justify-center">
            {/* TODO SHOW IMAGE BASED ON IPFS */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img src={createHypeStore.image} className="h-32 w-32" alt="dsf" /> */}
          </div>

          <span className="text-center">Created via hypeGG</span>
        </div>
      </div>
    </div>
  );
};

export default DistributeHypeForm;
