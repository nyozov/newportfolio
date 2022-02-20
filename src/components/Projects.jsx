import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import etuneImage from "../assets/etune_image.png";
import therapifyImage from "../assets/therapify_image.png";

const features = [
  {
    name: "Front End",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Back End",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
];

export default function Example() {
  return (
    <div className="py-12 dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Recent Projects
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div>
            <img className="w-full" src={etuneImage} alt="games" />
            <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
              <p className="text-sm text-white font-semibold tracking-wide">
                Etune
              </p>
              <p className="text-sm text-white font-semibold tracking-wide">
                React Express
              </p>
            </div>
            <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
              <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                Info idk
              </p>
              <div className="p-2 flex justify-between flex-start">
                <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Code
                </button>
                <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Website
                </button>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full" src={therapifyImage} alt="notes" />
            <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
              <p className="text-sm text-white font-semibold tracking-wide">
                Therapify
              </p>
              <p className="text-sm text-white font-semibold tracking-wide">
                React Express
              </p>
            </div>
            <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
              <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                Info idk
              </p>
              <div className="p-2 flex justify-between flex-start">
                <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Code
                </button>
                <button class=" disabled bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Website
                </button>
              </div>
            </div>
            
          </div>
        </div>

        <div className="mt-10">
          <div className="lg:text-center">
            <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Skills
            </h1>
          </div>
          <dl className="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium dark:text-white text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
