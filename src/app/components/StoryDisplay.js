"use client";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BookIcons } from "./BookIcons";
import { BookImage } from "./BookImage";
import BookControls from "./BookControls";

export const StoryDisplay = ({
  storySelected,
  imagesSelected,
  page,
  setPage,
  audio,
  audioRef,
  storyUnsaved,
  imagesUnsaved,
  setOpen,
  handleSaveBook,
  dismiss,
  handleLikeBook,
  selectedBook,
  userId,
  setMessage,
  extractTitleFromStory,
  loading,
  handleDeleteBook,
  unsaved,
  shared,
  setShared,
  show,
  setShow,
  theme,
}) => {
  const prepareText = (storyText) => {
    // Remove the title (assuming it's the first three words followed by two newlines)
    const titleEndIndex = storyText.indexOf("Once upon a time");
    const withoutTitle = storyText.substring(titleEndIndex);

    const storyEndIndex = storyText.indexOf("~The End~")
    const withoutEndTitle = storyText.substring(titleEndIndex, storyEndIndex)
    // Split into paragraphs
    return withoutEndTitle.split("\n\n");
  };

  const getStoryText = (storyText, currentPage) => {
    if (!storyText) return null;

    // Split the story into paragraphs
    const paragraphs = prepareText(storyText);

    // Calculate the number of paragraphs per page (adjust as needed)
    const paragraphsPerPage = 2;
    const startIndex = (currentPage - 1) * paragraphsPerPage;
    const endIndex = startIndex + paragraphsPerPage;

    // Slice the paragraphs for the current page
    const currentPageParagraphs = paragraphs.slice(startIndex, endIndex);

    if (currentPage == 6) {
      return (
        <div className="h-full flex items-center justify-center text-center mx-6 px-6 pb-20">
          <div className="text-2xl 2xl:text-3xl font-antiqua">
            {selectedBook?.creatorPhotoURL && (
              <div className="w-full flex justify-center">
                <img
                  src={selectedBook?.creatorPhotoURL}
                  alt="profile-mini"
                  className="h-24 w-24 object-cover border-4 border-stone-700 m-[2px] rounded-full"
                />
              </div>
            )}
            ~
            <p className={"text-2xl font-bold font-antiqua"}>
              {" "}
              This{" "}
              <span className="lowercase">
                {imagesUnsaved ? theme : selectedBook?.theme}
              </span>{" "}
              tale was created by&nbsp;
              {selectedBook?.creatorName ||
                selectedBook?.displayName ||
                "a mystery author"}
              .
            </p>
            <p className={"text-2xl font-bold font-antiqua"}>
              If you enjoyed reading their story please give it a like now!{" "}
            </p>
          </div>
        </div>
      );
    }

    if (currentPage == 0) {
      return (
        <div className="flex flex-col justify-center items-center h-full px-6 pb-20">
          <h5 className={"text-2xl font-bold font-antiqua"}> The story of</h5>~
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold capitalize font-antiqua pt-2 text-center">
            {storySelected
              ? extractTitleFromStory(storySelected)
              : storyUnsaved
              ? extractTitleFromStory(storyUnsaved)
              : // : story
                // ? extractTitleFromStory(story)
                "Once Upon A Time..."}
            <p
              className={"text-center xl:text-right text-xl font-bold font-antiqua lowercase"}
            >
              {" "}
              as told by{" "}
              <span className="capitalize">
                {selectedBook?.creatorName ||
                  selectedBook?.displayName ||
                  "a mystery author"}
              </span>
              .
            </p>
          </h1>
        </div>
      );
    }

    // Render each paragraph separately
    return (
      <div className="font-antiqua">
        { page != 5 ? 
        currentPageParagraphs.map((paragraph, index) => 
          <p key={index} style={{ textAlign: "justify", marginBottom: "1em" }}>
            {paragraph}
          </p>)
         : 

         currentPageParagraphs.map((paragraph, index) => (
        <>
         <p key={index} style={{ textAlign: "justify", marginBottom: "1em" }}>
           {paragraph} 
         </p>
        
         </>
         )
          
     ) }
      </div>
    );
  };

  return (
    <>
      <BookIcons
        handleDeleteBook={handleDeleteBook}
        handleSaveBook={handleSaveBook}
        handleLikeBook={handleLikeBook}
        dismiss={dismiss}
        unsaved={unsaved}
        selectedBook={selectedBook}
        page={page}
        setPage={setPage}
        setMessage={setMessage}
        setShow={setShow}
        userId={userId}
        show={show}
        audio={audio}
        audioRef={audioRef}
      />

      <div className="fade-in">
        <div className=" border-r sm:border-l-1 sm:rounded-xl bg-orange-200 xl:bg-gradient-to-r from-orange-200 from-20% via-stone-700 via-50% to-orange-200 to-60% ...">
          <div className="sm:border-r-2 sm:border-l-1 sm:rounded-xl sm:border-stone-800 mx-auto xl:flex border xl:h-[87vh]">
            <BookImage
              imagesSelected={imagesSelected}
              page={page}
              imagesUnsaved={imagesUnsaved}
              selectedBook={selectedBook}
            />
            {/* Text Section */}
            <div
            //overflow-y-hidden
              className="flex flex-col w-full xl:w-1/2 p-4 xl:p-10 xl:bg-gradient-to-r from-stone-700 from-0% via-orange-200 via-25% to-orange-200 to-90% 
                sm:rounded xl:rounded-xl xl:border xl:rounded-tr-lg xl:rounded-br-lg xl:border-l-4 xl:border-stone-700  text-stone-900"
            >
              <div className="relative flex justify-end items-start text-stone-900">
                <button
                  onClick={() => {
                    setOpen(false);
                    setMessage("");
                  }}
                  className="absolute -top-6 xl:-right-8 w-12 hover:text-orange-500 text-center z-30"
                >
                  <XMarkIcon className="h-6 w-12" />
                </button>
              </div>

              <div className="h-full text-stone-900 pr-4 lg:pr-0 text-2xl xl:text-xl 2xl:text-3xl pt-3  w-full  no-scrollbar overflow-y-auto">
                {!storySelected && !storyUnsaved && !loading ? (
                  <div className="flex justify-center items-center h-full italic text-center font-antiqua">
                    Please click on a story or create a new story to start
                    reading here.
                  </div>
                ) : (
                  getStoryText(storySelected || storyUnsaved, page)
                )}
              </div>

              <BookControls
                selectedBook={selectedBook}
                userId={userId}
                setPage={setPage}
                audio={audio}
                audioRef={audioRef}
                page={page}
                handleLikeBook={handleLikeBook}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};