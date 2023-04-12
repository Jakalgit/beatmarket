import * as NotificationActionCreators from "./notification"
import * as PlayerActionsCreators from "./player"

export default {
    ...NotificationActionCreators,
    ...PlayerActionsCreators,
}