
import { g } from "motion/react-client";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName,spareImg} ) => (
            <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            titleClassName={titleClassName}
            spareImg={spareImg}

            img={img}
            
            />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;