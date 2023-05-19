import { AlurkerjaForm } from "alurkerja-ui";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreatePage: NextPage = () => {
  const router = useRouter();
  const { formState, handleSubmit, control, setValue } = useForm();

  const baseUrl = "https://kpm-sys.merapi.javan.id";
  const tableName = "pengurusan-rekod-aktiviti-pemohon";

  const onSubmit = async (data: FieldValues) => {
    await axios.post(`${baseUrl}/api/crud/${tableName}`, data);

    Swal.fire("Success", "Success create data", "success").then(() => router.push("/crud"));
  };

  return (
    <div className="p-10">
      <div className="bg-white rounded-lg">
        <AlurkerjaForm
          baseUrl={baseUrl}
          tableName={tableName}
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default CreatePage;
