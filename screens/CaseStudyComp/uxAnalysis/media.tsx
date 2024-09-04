import Image from "next/image";
const UXMedia = (props: any) => {
  // console.log(props.uxAnalysis);

  return (
    <>
      <div>
        {props.uxAnalysis.map((item: any, index: any) => {
          return (
            <Image
              src={item.media}
              alt="Solution 1"
              width={300}
              height={250}
              className="my-8 w-full"
            />
          );
        })}
      </div>
    </>
  );
};

export default UXMedia;
