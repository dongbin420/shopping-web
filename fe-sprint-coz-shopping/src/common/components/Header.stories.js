import Header from "./Header";
import React, { useState } from "react";

export default {
  title: "Mine/Header",
  component: Header,
};

// const Template = ({ isBubbleOpen }) => {
//   const [isOpen, setIsOpen] = useState(isBubbleOpen);

//   const handleOpenBubble = () => {
//     setIsOpen(true);
//   };

//   const handleCloseBubble = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Header
//       isBubbleOpen={isOpen}
//       handleOpenBubble={handleOpenBubble}
//       handleCloseBubble={handleCloseBubble}
//     ></Header>
//   );
// };

// export const BubbleOpen = Template.bind({});
// BubbleOpen.args = {
//   isBubbleOpen: true,
// };

// export const BubbleClose = Template.bind({});
// BubbleClose.args = {
//   isBubbleOpen: false,
// };

export const BubbleOpen = {
  args: {
    isBubbleOpen: true,
  },
};
