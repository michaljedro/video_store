import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()}>
        <AiOutlineClose onClick={onClose} />
        <h2>{book.publishYear}</h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div>
          <PiBookOpenTextLight />
          <h2>{book.title}</h2>
        </div>
        <div>
          <BiUserCircle />
          <h2>{book.author}</h2>
        </div>
        <p>Anything You want to show</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
