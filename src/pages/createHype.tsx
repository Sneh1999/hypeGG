import CreateHypeForm from "@/components/CreateHypeForm";
import DistributeHypeForm from "@/components/DistributeHypeForm";
import ReviewHypeForm from "@/components/ReviewHypeForm";
import { HypeForm } from "@/constants/constants";
import { useCreateHypeStore } from "@/stores/CreateHypeStore";
import React, { useState } from "react";

const CreateHype = () => {
  const createHypeStore = useCreateHypeStore();
  return createHypeStore.form === HypeForm.CREATE_HYPE ? (
    <CreateHypeForm />
  ) : createHypeStore.form === HypeForm.DISTRIBUTE_HYPE ? (
    <DistributeHypeForm />
  ) : (
    <ReviewHypeForm />
  );
};

export default CreateHype;
