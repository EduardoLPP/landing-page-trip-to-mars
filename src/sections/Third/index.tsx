import { Form } from "../../components/Form";
import { DivRocketImage, RocketImage, SectionForm } from "./styles";


export function ThirdSection() {
  return (
    <SectionForm>
        <Form />
          
        <DivRocketImage
          whileInView="visible"
          initial="initial"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 0 },
            visible: {
              opacity: 1,
              y: -100,
              transition: { duration: 1, delay: 1 },
            },
          }}>
            
          <RocketImage>
            <img src="/images/rocket.svg" alt="Rocket" />
          </RocketImage>
        </DivRocketImage>
    </SectionForm>
  )
}
