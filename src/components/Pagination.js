import style from "@/styles/components/pagination.module.css"
import Page from "@/components/Page";

const Pagination = () => {
    return (
        <div className={style.page_line}>
            <Page page={1} isSelected={true} />
            <Page page={2} isSelected={false} />
            <Page page={3} isSelected={false} />
            <Page page={4} isSelected={false} />
            <Page page={5} isSelected={false} />
        </div>
    );
};

export default Pagination;