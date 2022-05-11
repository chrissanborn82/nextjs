import Search from "./search";
import React from "react";

export default () => {

    const [showSearch, setShowSearch] = React.useState(false);

    function toggle() {
        setShowSearch(!showSearch);
    }

    return (
        <Search
            showSearch={showSearch}
            onClick={toggle}
        />
    );
}