import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const BookControls = ({
  selectedBook,
  userId,
  setPage,
  page,
  audio,
  audioRef,
  handleLikeBook,
}) => {
  console.log("audioBC", selectedBook, "audio", audio, "audioRef", audioRef);

 
  const handlePage = (direction) => {
    let max = 6;
    let min = 0;
    const audio = audioRef?.current;
    
    if (direction === "down" && page > min) {
      setPage(page - 1);
      audio.currentTime = page * 35;
    } else if (direction === "up" && page < max) {
      setPage(page + 1);
      if (page == 0){
        return
      } else {
        audio.currentTime = page * 35;
      }
      
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
        console.log(audioRef.current.duration);
    }
};

  return (
    <div className="flex-1 flex pt-3 ">
      <div className="w-full flex items-end justify-end">
        


        <div className="w-full">
     
          <audio
            ref={audioRef}
            controls
            src={selectedBook?.audioUrl || audio}
            className="w-full"
            style={{ height: "45px", border: "2px" }}
            onLoadedMetadata={onLoadedMetadata}
          />
        </div>


        <div className="w-2/3 md:w-1/2 text-right flex items-center justify-end">
          {/* {selectedBook?.userId !== userId &&
            selectedBook?.userId != undefined && (
              <button
                onClick={() => handleLikeBook(selectedBook?.id, userId)}
                className={
                  "flex relative px-4 py-2 mx-3 text-stone-950 rounded-full hover:bg-orange-400 shadow-lg border-2 bg-transparent border-stone-500 transition ease-in-out hover:scale-110 duration-300"
                }
              >
                <HandThumbUpIcon className="h-6 w-6 " />
                <span
                  className={
                    selectedBook?.likedBy?.includes(userId)
                      ? "absolute -top-3 -right-3 px-2 font-sans  text-sm bg-teal-500 border-2 border-teal-500 rounded-bl-xl text-white rounded-full"
                      : "absolute -top-3 -right-3 px-2 font-sans  text-sm bg-slate-700 border-2 border-teal-500 rounded-bl-xl text-teal-500 rounded-full"
                  }
                >
                  {selectedBook?.likes || 0}
                </span>
              </button>
            )} */}
          <button
            onClick={() => handlePage("down")}
            className="transition ease-in-out px-3 py-2 text-stone-950 bg-transparent rounded-tl-full rounded-bl-full hover:bg-orange-400 shadow-lg border-2 border-stone-500"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            type="submit"
            className="transition ease-in-out px-4 py-2 mx-1  text-stone-950 bg-transparent font-sans font-semibold rounded hover:bg-orange-400 shadow-lg border-2 border-stone-500"
          >
            {page}
          </button>
          <button
            onClick={() => handlePage("up")}
            type="submit"
            className="transition ease-in-out px-3 py-2  text-stone-950 bg-transparent rounded-tr-full rounded-br-full hover:bg-orange-400 shadow-lg border-2 border-stone-500"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookControls;