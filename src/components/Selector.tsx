import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./css/Selector.css";

// Interface describing Option for dropdown list
export interface Option {
  id: number;
  name: string;
}

// Props to pass in list data as well as selected item's name
interface Props {
  data: Option[];
  defaultOption: string;
  onSelect: (item: Option) => void;
}

// Selector component returns a dropdown list
const Selector = ({ data, defaultOption, onSelect }: Props) => {
  // Keep track of when to show list items
  const [itemsShown, setItemsShown] = useState<boolean>(false);
  // Keep track of currently selected option
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);

  // Reference dropdown div
  const ref = useRef<HTMLDivElement>(null);

  // Handles clicks outside of the dropdown menu and hides it
  const clickOutside = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setItemsShown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      // Unbind the event listener on clean up
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  // Pass in the ref to the click function
  clickOutside(ref);

  return (
    <div ref={ref} className="selector-container">
      <button
        className="selector-btn"
        onClick={() => {
          setItemsShown(!itemsShown);
        }}
      >
        <div className="item-selector">
          <div>{selectedOption}</div>
          <div className="chevron-icon">
            <BsChevronDown></BsChevronDown>
          </div>
        </div>
      </button>
      {itemsShown && (
        <div
          className={
            data.length > 10 ? "item-dropdown selector-scroll" : "item-dropdown"
          }
        >
          <ul className="item-list">
            {data?.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className="item-btn"
                    onClick={() => {
                      // Pass selected item to App component
                      onSelect(item);
                      // Hide options
                      setItemsShown(false);
                      // Set current option
                      setSelectedOption(item.name);
                    }}
                  >
                    <div>{item.name}</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Selector;
