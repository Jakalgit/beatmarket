import React, {useEffect, useState} from 'react';
import NavbarLarge from "@/components/NavbarLarge";
import NavbarSmall from "@/components/NavbarSmall";

const Navbar = () => {

    const [size, setSize] = useState(1440)

    if (typeof window !== "undefined") {
        useEffect(() => {
            setSize(window.innerWidth)
        }, [window.innerWidth])
    }

    return (
        <>
            {size > 767 ?
                <NavbarLarge />
                :
                <NavbarSmall />
            }
        </>
    );
};

export default Navbar;