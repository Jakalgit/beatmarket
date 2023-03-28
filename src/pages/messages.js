import Grid from "@/components/Grid";
import {Col} from "react-bootstrap";
import style from "@/styles/pages/messages.module.css"
import Image from "next/image";

const Messages = () => {
    return (
        <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
            <Grid>
                <Col xxl={4}>
                    <div className={style.chats}>
                        {[1,1,1,1,1,1,1,1,1,1,1,1,1].map(() =>
                            <div className={style.chat}>
                                <Image src="" alt="prof-img" className={style.chat_preview}/>
                                <div className={style.middle}>
                                    <h1 className={style.chat_name}>CAKE BUY BEATS</h1>
                                    <p className={style.last_message}>Какое-то сообщение от пользователя</p>
                                </div>
                                <div className={style.right}>
                                    <p className={style.time}>19:24</p>
                                    <p className={style.message_view}>1</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
                <Col xxl={8}>
                    <div className={style.area}>
                        <div className={style.head_line}>
                            <h1 className={style.name}>CAKE BUY BEATS</h1>
                            <p className={style.user_id}>@cakebuybeats</p>
                        </div>
                        <div className={style.view_area}>

                        </div>
                        <div className={style.under_line}>
                            <textarea></textarea>
                        </div>
                    </div>
                </Col>
            </Grid>
        </div>
    );
};

export default Messages;