import GDSEButton from "../../components/Button";

export default function Body() {

  return (
    <>
      <GDSEButton btnName="Pink" btnColor="bg-pink-400" hoverColor="hover:bg-pink-600" 
        btnposition="absolute bottom-0 right-0"/>
      <GDSEButton btnName="Purple" btnColor="bg-fuchsia-500" hoverColor="dark:md:hover:bg-fuchsia-600" 
        btnposition="absolute bottom-0 right-28"/>
      <GDSEButton btnName="Green" btnColor="bg-emerald-400" hoverColor="dark:md:hover:bg-emerald-600" 
        btnposition="absolute bottom-0 right-60"/>
    </>
  );
}
