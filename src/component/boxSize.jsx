import { Data } from "./data";

export default function BoxSize() {
  return (
    <>
      <div>
        <div className="container ">
          {Data.map((res) => {
            return (
              <div className="float-left border bg-violet-100 rounded-md   mx-2 items-center p-3 h-44 w-52">
                <div>{res.exp}</div>

                <div>{res.logo}</div>

                <div>{res.year}</div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
