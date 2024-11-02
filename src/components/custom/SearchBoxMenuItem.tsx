import { Link } from "react-router-dom";
import { getIconUrlForFilePath } from "vscode-material-icons";

const SearchBoxMenuItem = () => {
  return (
    <Link to={""}>
      <div className="flex justify-between items-center hover:bg-offbackground rounded-lg p-4 my-2">
        <div className="flex gap-4 items-center">
          <img src={getIconUrlForFilePath("e.txt", "/icons")} width={40} />
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium leading-none max-w-[200px] truncate">
              Resume.pdf
            </span>
            <span className="text-xs font-normal leading-none text-muted-foreground max-w-[200px] truncate">
              @ayhamgrep
            </span>
          </div>
        </div>

        <span className="text-sm mt-auto font-medium leading-none text-muted-foreground">
          Mar 13 2021
        </span>
      </div>
    </Link>
  );
};

export default SearchBoxMenuItem;
