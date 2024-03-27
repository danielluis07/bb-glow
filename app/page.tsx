"use client";

import Image from "next/image";
import banner from "@/public/flower-image-2.jpg";
import bannermobile from "@/public/flower-image-mobile.jpg";
import testimonial1 from "@/public/testimonials/testimonial-1.jpg";
import testimonial2 from "@/public/testimonials/testimonial-2.jpg";
import testimonial3 from "@/public/testimonials/testimonial-3.jpg";
import doctor from "@/public/doctor.jpg";
import tools from "@/public/makeup-tools.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto px-4 pb-20 mt-8">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-x-32">
        <div className="flex lg:hidden relative size-80 overflow-hidden rounded-full sm:rounded-none sm:h-80 sm:w-full mx-auto">
          <Image
            src={resolution.width > 360 ? banner : bannermobile}
            alt="banner"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:flex relative size-[550px] overflow-hidden rounded-full mx-auto lg:mx-0 lg:order-2">
          <Image
            src={banner}
            alt="banner"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-8 border border-slate-400 lg:border-none p-2 rounded-lg lg:order-1 lg:w-[450px]">
          <div className="font-bold text-xl lg:text-4xl">
            Conquista el Mundo del BB Glow: El curso que cambiará tu vida
            profesional
          </div>
          <div className="mt-3">
            <div className="flex items-center lg:space-x-2">
              <FaCheckCircle className="hidden lg:flex text-xl text-fuchsia-500" />
              <div className="text-xl">
                ¡El curso que cambiará tu vida professional
              </div>
            </div>
            <form action="https://www.bellasbellas.com/curso11/?ref=U89363941W">
              <button
                type="submit"
                className="flex justify-center mt-10 py-2 w-80 bg-fuchsia-300 rounded-md">
                ¡Únete al curso ahora!
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="absolute">
        <div className="hidden lg:flex items-center mt-20 max-w-[1500px]">
          <div className="absolute left-20">
            <div className="relative h-[450px] w-[400px]">
              <Image
                src={tools}
                alt="glow"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-end w-full h-80 bg-gradient-to-r from-fuchsia-50 via-fuchsia-100 to-fuchsia-200">
            <div className="w-3/6 2xl:w-4/6 p-10 space-y-8">
              <div className="text-2xl font-bold text-fuchsia-400/60">
                ¿Qué es BB Glowing?
              </div>
              <div className="text-slate-700/60 text-lg">
                ¿Alguna vez has soñado con ser una experta en estética y
                transformar vidas con tu habilidad? Descubre cómo el Curso de BB
                Glowing te brinda la oportunidad única de hacer precisamente
                eso. Aprende de los mejores en la industria y da el primer paso
                hacia una carrera brillante
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* doctor */}
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-[500px]">
        <div className="relative w-full h-96 lg:order-2">
          <Image
            src={doctor}
            alt="doutora"
            fill
            className="size-full object-cover md:object-contain lg:object-cover"
          />
        </div>
        <div className="flex lg:items-center p-3 lg:order-1">
          <div className="text-slate-700/60 text-lg">
            El Curso de BB Glow, impartido por la experimentada Katerin Jiménez,
            es una excelente oportunidad educativa en el ámbito de la estética
            facial. Este curso en línea enseña la técnica BB Glow, que realza la
            belleza de la piel. Con más de 13 años de experiencia, Katerin
            comparte sus conocimientos para resultados prometedores y rentables.
            Es ideal tanto para principiantes como para profesionales que buscan
            aumentar sus ingresos. Para más detalles, visita{" "}
            <Link
              className="font-bold text-fuchsia-500"
              href="https://www.bellasbellas.com/curso11/?ref=U89363941W">
              BellasBellas
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-36 max-w-2xl mx-auto">
        <video controls>
          <source
            src="/Untitled video - Made with Clipchamp (2).mp4"
            type="video/mp4"
          />
          O seu navegador não suporta a exibição de vídeos.
        </video>
      </div>

      {/* section 2 */}
      <div className="mt-8 lg:mt-20">
        <div className="w-4/6 mx-auto space-y-5 mb-10">
          <div className="text-2xl font-bold text-center text-fuchsia-400/60">
            Testimonios de Éxito
          </div>
          <div className="text-slate-700/60 text-lg text-center">
            Incluye historias reales de estudiantes que han tomado el curso y
            han visto un cambio significativo en su carrera. Testimonios
            visuales y citas que inspiren confianza en el potencial del curso
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-10 lg:gap-y-0 lg:grid-cols-3 lg:justify-evenly lg:w-full lg:items-center lg:space-y-0">
          <div className="w-72 mx-auto">
            <div className="relative size-72 overflow-hidden rounded-lg mx-auto">
              <Image
                src={testimonial1}
                alt="testimonial"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col my-4">
              <div className="flex">
                <BiSolidQuoteAltLeft className="text-5xl text-fuchsia-500" />
              </div>
              <div>
                Es por lejos el mejor curso que he hecho en mi vida, he
                aprendido cosas que nunca habia visto y ya habia tomado otro
                curso que no tiene nada que ver con la calidad de este.
              </div>
              <div className="flex justify-end pr-2 text-gray-400">
                Elena Hernandéz
              </div>
              <div className="flex justify-end">
                <BiSolidQuoteAltRight className="text-5xl text-fuchsia-500" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-auto">
            <div className="relative size-72 overflow-hidden rounded-lg mx-auto">
              <Image
                src={testimonial2}
                alt="testimonial"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col my-4">
              <div className="flex">
                <BiSolidQuoteAltLeft className="text-5xl text-fuchsia-500" />
              </div>
              <div>
                yo llevo 2 cursos y estoy feliz aprendiendo mucho, me gustaría
                tener un uniforme como el de la profe me ecanta!
              </div>
              <div className="flex justify-end pr-2 text-gray-400">
                Alejandra Marcel
              </div>
              <div className="flex justify-end">
                <BiSolidQuoteAltRight className="text-5xl text-fuchsia-500" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-auto md:col-span-5 lg:col-span-1">
            <div className="relative size-72 overflow-hidden rounded-lg mx-auto">
              <Image
                src={testimonial3}
                alt="testimonial"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col my-4">
              <div className="flex">
                <BiSolidQuoteAltLeft className="text-5xl text-fuchsia-500" />
              </div>
              <div>
                Al principio creía que por internet no era lo mismo y
                definitivamente tenia razón es mucho mejor! estoy feliz con mi
                curso, no veo la hora de recibir mi certificación
              </div>
              <div className="flex justify-end pr-2 text-gray-400">
                Adriana Garcia
              </div>
              <div className="flex justify-end">
                <BiSolidQuoteAltRight className="text-5xl text-fuchsia-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
