import { Link } from "react-router-dom";
import { getIconUrlByName } from "vscode-material-icons";

const ItemGrid = () => {
  return (
    <Link to={""} className="max-w-[100%] md:max-w-[300px]">
      <div className="flex justify-between items-center hover:bg-offbackground rounded-lg p-4 my-2 min-w-0 overflow-hidden border-2">
        <div className="flex gap-4 items-center">
          <img
            className="drag-none"
            src={getIconUrlByName("folder-video", "/icons")}
            width={40}
          />
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-medium truncate sm:max-w-[150px] max-w-[200px] ">
              Video
            </span>
            <span className="text-xs font-normal truncate sm:max-w-[100px] max-w-[140px] leading-none text-muted-foreground">
              @ayham fioejiogjwiogjoeijfewkfweopfkp
            </span>
          </div>
        </div>
        <span className="mt-auto text-xs text-muted-foreground">122 items</span>
      </div>
    </Link>
  );
};

export default ItemGrid;
