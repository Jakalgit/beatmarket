import style from "@/styles/pages/catalog.module.css"
import Grid from "@/components/Grid";
import Pagination from "@/components/Pagination";
import {useEffect, useState} from "react";
import Filters from "@/components/Popups/Filters";
import Beat from "@/components/Beat";
import Creator from "@/components/Creator";

export default function Catalog() {

    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState(null);

    const updateVisible = (value) => {
        setVisible(value);
    }

    const updateFilters = (value) => {
        setFilters(value)
    }

    useEffect(() => {
        console.log(filters)
    }, [filters])

    const arr = [1,1,1,1]
    return (
        <div  className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Filters visible={visible} setVisible={(value) => updateVisible(value)} save={filters} setSaveFilters={(value) => updateFilters(value)}/>
            <div className={style.filter_line}>
                <button onClick={() => setVisible(true)} className={style.filter_button}>Фильтры</button>
            </div>
            <div className={style.list}>
                <Grid>
                    {/*
                    {arr.map(() =>
                        <Creator />
                    )}
                    */}
                    {arr.map(() =>
                        <>
                            <Creator name={"GONE.Fludd"} starCount={"16234782"} />
                            <Creator name={"CAKE BUY BEATS"} starCount={"12234782"} />
                            <Creator name={"PROOVY"} starCount={"16234782"} />
                            <Creator name={"КлоуКома"} starCount={"16234782"} />
                        </>
                    )}
                </Grid>
            </div>
            <Grid>
                <Pagination />
            </Grid>
        </div>
    );
};