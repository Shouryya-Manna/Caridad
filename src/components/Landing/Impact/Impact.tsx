import { ImpactData } from "@/data/Impact.data";
import Image from "next/image";

export default function Impact() {
  return (
    <div>
      <div>IMPACT</div>
      <p>
        Helping women now through early detection,
        education, and support
      </p>
      <div>
        {ImpactData.map((item, index) => (
          <div key={index}>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
