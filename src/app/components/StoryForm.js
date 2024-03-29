import {
  BookOpenIcon,
  ChevronDownIcon,
  LightBulbIcon,
  PaintBrushIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";
//import SparklesIcon from "/public/SparklesIcon.svg"
import Image from "next/image";

export const StoryForm = ({
  userPrompt,
  setUserPrompt,
  handleSubmit,
  setMessage,
  loading,
  handleOpen,
  storyUnsaved,
  theme,
  setTheme,
}) => {
  const randomNouns = [
    "fairy",
    "witch",
    "wizard",
    "goblin",
    "troll",
    "gnome",
    "faeries",
    "princess",
    "prince",
    "king",
    "queen",
    "knight",
    "dinosaur",
    "mouse",
    "teddy",
    "dragon",
    "monster",
    "beast",
    "creature",
    "owl",
  ];

  const randomPlaces = [
    "forest",
    "village",
    "woods",
    "kingdom",
    "adventure",
    "pond",
    "castle",
    "oak tree",
    "spell",
    "wish",
    "dream",
    "picnic",
    "journey",
    "quest",
    "battle",
    "school",
    "land",
    "world",
  ];

  const randomAdjectives = [
    "enchanted",
    "amazing",
    "grumpy",
    "secret",
    "forgetful",
    "eerie",
    "lost",
    "scatterbrained",
    "mysterious",
    "fascinating",
    "curious",
    "peculiar",
    "hilarious",
    "astounding",
    "charming",
    "magic",
    "bumbling",
  ];

  const getRandomIdea = (nounsArray, adjectivesArray, placesArray) => {
    // Shuffle the array
    const shuffledNouns = [...nounsArray].sort(() => 0.5 - Math.random());
    const shuffledAdjectives = [...adjectivesArray].sort(
      () => 0.5 - Math.random()
    );
    const shuffledPlaces = [...placesArray].sort(() => 0.5 - Math.random());
    // Pick the first three elements and join them into a string
    return (
      shuffledAdjectives.slice(0, 1).join(" ") +
      " " +
      shuffledNouns.slice(0, 1).join(" ") +
      " " +
      shuffledPlaces.slice(0, 1).join(" ")
    );
  };

  function ThemeDropdown() {
    return (
      <div className="text-sm ">
        <Menu>
          <Menu.Button
            className={
              "flex justify-between mt-2 text-orange-300 hover:text-amber-500  "
            }
          >
            <div className="flex relative"> </div>
            <ChevronDownIcon className="h-5 w-5 mr-2 text-orange-300" />
            {theme} Theme
          </Menu.Button>
          {/* <span className="text-[10px] text-orange-300 absolute -top-3 ">STYLE</span> */}
          <Menu.Items
            className={
              "flex  text-white justify-between  z-30 ml-5 -mt-6 absolute  bg-sky-950 rounded  leading-loose"
            }
          >
            <div className="flex justify-between ">
              <Menu.Item>
                <button
                  onClick={() => setTheme("Spooky")}
                  className={"mx-2 hover:text-orange-300"}
                >
                  Spooky
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setTheme("Pretty")}
                  className={"mx-2 hover:text-orange-300"}
                >
                  Pretty
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setTheme("Funny")}
                  className={"mx-2 hover:text-orange-300"}
                >
                  Funny
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setTheme("Cute")}
                  className={"mx-2 hover:text-orange-300"}
                >
                  Cute
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setTheme("Weird")}
                  className={"mx-2 hover:text-orange-300"}
                >
                  Weird
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    );
  }

  return (
    <div className="flex justify-start w-full lg:w-[45vw] xl:w-[35vw] 2.5xl:w-[30vw] 3xl:text-2xl px-2 py-0 md:py-4">
      <form onSubmit={handleSubmit} className="mt-4 lg:mt-0 rounded-xl w-full">
        <div className="text-orange-300 ">
          <h1 className="font-bold font-antiqua text-5xl 2.5xl:text-7xl 3xl:text-8xl">
            Storytime AI
          </h1>
        </div>
        <h3 className="py-2 text-md font-normal text-white">
        Create stories with AI and bring your imagination to life! 
          Write your own prompt or generate one to get started.
          
   
        </h3>
        <div className="flex items-center justify-center">
          <hr className="h-px  bg-orange-300 border-0  w-full" />{" "}
          <SparklesIcon className=" w-10 aspect-square mx-2 text-orange-300" />{" "}
          {/* <Image src={SparklesIcon} alt="sparkles-icon"  /> */}
          <hr className="h-px  bg-orange-300 border-0  w-full" />
        </div>

        <div className="flex w-full justify-between items-center pb-2 text-sm font-semibold ">
          <label
            htmlFor="prompt"
            className="block text-orange-300 text-sm font-semibold py-2 3xl:text-2xl"
          >
            {"Create a story about..."}
          </label>

          <label
            onClick={() =>
              setUserPrompt(
                getRandomIdea(randomNouns, randomAdjectives, randomPlaces)
              )
            }
            htmlFor="prompt"
            className="group   text-orange-300 bg-transparent cursor-pointer "
          >
            <p className="flex items-center text-sm font-semibold hover:text-orange-200 3xl:text-2xl">
              Generate idea?{" "}
              <span className="flex items-center justify-center bg-sky-950 h-8 w-8 ml-1 font-bold border-2 rounded-full border-orange-300 text-lg group-hover:bg-orange-300 group-hover:text-sky-900 transition-colors duration-200">
                <LightBulbIcon className="h-5 w-5" />
              </span>
            </p>
          </label>
        </div>

        <input
          id="prompt"
          type="text"
          autoComplete="true"
          placeholder="A magical castle in the sky"
          value={userPrompt}
          onChange={(e) => {
            setUserPrompt(e.target.value), setMessage("");
          }}
          className="w-full p-2 rounded outline-none text-black placeholder-gray-500 bg-white text-[16px] 3xl:text-xl 3xl:py-4"
        />

        {/* <ThemeDropdown /> */}

        <div className="flex items-center text-[15px] gap-4 pt-4 3xl:text-xl ">
          <button
            type="submit"
            className={
             "font-semibold w-full text-white py-2 rounded-md bg-amber-500 hover:bg-amber-400 flex justify-center border-stone-700 3xl:py-4"
            }
          >
            Create
            <PaintBrushIcon className="h-6 w-6 mx-2" />
          </button>

          {storyUnsaved && (
            <button
              onClick={handleOpen}
              className={
                "font-semibold w-full text-white py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 flex justify-center border-stone-700 3xl:py-4"
              }
            >
              View
              <BookOpenIcon className="h-6 w-6 mx-2" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
