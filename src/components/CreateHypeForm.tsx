/* eslint-disable @next/next/no-img-element */
import { HypeForm } from "@/constants/constants";
import { useCreateHypeStore } from "@/stores/CreateHypeStore";
import React, { useState } from "react";
import { toast } from "react-toastify";

async function imageSize(
  url: string
): Promise<{ width: number; height: number }> {
  const img = document.createElement("img");

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      // Natural size is the actual image size regardless of rendering.
      // The 'normal' `width`/`height` are for the **rendered** size.
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      // Resolve promise with the width and height
      resolve({ width, height });
    };

    // Reject promise on error
    img.onerror = reject;
  });

  // Setting the source makes it start downloading and eventually call `onload`
  img.src = url;

  return promise as Promise<{ width: number; height: number }>;
}

const CreateHypeForm = () => {
  const createHypeStore = useCreateHypeStore();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const { width, height } = await imageSize(objectUrl);
    if (height !== width) {
      return toast.error("Image must be square");
    }

    createHypeStore.setImage(objectUrl);

    // TODO: Upload `file` to IPFS
  };

  return (
    <div className="mx-auto mt-20 flex items-center justify-center gap-40">
      <div className="flex-col">
        <h1 className="text-3xl font-extrabold text-[#7165FF]">Send HypeGG</h1>
        <h3 className="pt-2 text-base font-medium text-[#00000080]">
          Kindly fill the form below to create your POT
        </h3>
        <h2 className="py-2  text-base font-medium text-[#020B1A]">
          Collection
        </h2>
        <div>
          <input
            className="w-full  rounded-3xl border-2 border-[#7165FF] py-2 px-4 focus:outline-none"
            placeholder="Name of your collection"
            onChange={(e) => createHypeStore.setCollection(e.target.value)}
          ></input>
        </div>
        <h2 className="py-2  text-base font-medium text-[#020B1A]">
          Community
        </h2>
        <div>
          <input
            className="w-full  rounded-3xl border-2 border-[#7165FF] py-2 px-4 focus:outline-none"
            placeholder="Name of your community"
            onChange={(e) => createHypeStore.setCommunity(e.target.value)}
          ></input>
        </div>

        <button
          className=" float-right mt-4 rounded-xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] px-5 py-3 text-white hover:opacity-70"
          onClick={() => createHypeStore.setForm(HypeForm.DISTRIBUTE_HYPE)}
        >
          Next
        </button>
      </div>
      {/* eslint-disable-next-line react/jsx-no-undef, @next/next/no-img-element */}
      {/* <img src="/createPot.png" alt="createPot" className="" /> */}

      <div className="relative min-h-[18rem] w-96 skew-x-6">
        <div className="absolute flex min-h-[18rem] w-96 flex-col rounded-xl  bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] py-2 px-4 text-white shadow-[inset_1px_4px_6px_2px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-4 -top-4 flex min-h-[18rem] w-96 flex-col gap-10 rounded-xl bg-gradient-to-r from-[#6B8BFC] to-[#867DEC] py-2 px-4 text-white shadow-[inset_1px_4px_6px_2px_rgba(0,0,0,0.3)]">
          <h1 className="text-lg font-extrabold">
            {createHypeStore.collection
              ? createHypeStore.collection
              : "Headline"}
          </h1>

          {createHypeStore.image ? (
            <div className="flex items-center justify-center">
              <img
                src={createHypeStore.image}
                className="h-32 w-32"
                alt="dsf"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <label
                htmlFor="imageUpload"
                className="w-full cursor-pointer rounded-lg bg-[#E3E3FC] py-8 px-20 text-center text-[#020B1A] hover:opacity-70"
              >
                Upload Image
              </label>
              <input
                id="imageUpload"
                name="imageUpload"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          )}

          <span className="text-center">Created via hypeGG</span>
        </div>
      </div>
    </div>
  );
};

export default CreateHypeForm;
