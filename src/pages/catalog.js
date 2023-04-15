import style from "@/styles/pages/catalog.module.css"
import Grid from "@/components/Grid";
import Pagination from "@/components/Pagination";
import {useState} from "react";
import Filters from "@/components/Popups/Filters";
import Beat from "@/components/Beat";
import Creator from "@/components/Creator";
import HeightWrapper from "@/components/HeightWrapper";

export default function Catalog() {

    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState(null);

    const updateVisible = (value) => {
        setVisible(value);
    }

    const updateFilters = (value) => {
        setFilters(value)
    }

    const arr = [1,1,1,1]
    return (
        <>
            <Filters
                visible={visible}
                setVisible={(value) => updateVisible(value)}
                save={filters} setSaveFilters={(value) => updateFilters(value)}
            />
            <HeightWrapper dir="column">
                <div className={style.filter_line}>
                    <button onClick={() => setVisible(true)} className={style.filter_button}>Фильтры</button>
                </div>
                <div className={style.list}>
                    <Grid>
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
            </HeightWrapper>
        </>
    );
};