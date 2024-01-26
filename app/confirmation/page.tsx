import DownloadButton from "./components/download-button";
import UserForm from "./form";

const Page = () => {
  return (
    <div className="my-12 flex flex-col gap-8">
      <UserForm />
      <DownloadButton />
    </div>
  );
};

export default Page;
