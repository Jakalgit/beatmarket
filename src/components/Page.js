import style from "@/styles/components/page.module.css"

const Page = ({page, isSelected}) => {
    return (
        <div className={style.item + ' ' + (isSelected ? style.selected : '')}>
            <p className={style.number}>{page}</p>
        </div>
    );
};

export default Page;