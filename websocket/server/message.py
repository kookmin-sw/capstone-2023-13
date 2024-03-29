class Message:
    CONNECT = "connect"
    CHAT = "chat"
    ACTION = "action"
    
    @classmethod
    def get_init_data(cls, data):
        user = data.get('user_id')
        channel = data.get('channel_id')
        nickname = data.get('nickname')
        custom = data.get('custom')
        X = data.get('X')
        Y = data.get('Y')
        Z = data.get('Z')
        return user, nickname, channel, custom, X, Y, Z
    
    @classmethod
    def set_init_data(cls, user_id, nickname, custom, channel_id, X, Y, Z):
        return {
            "user_id": user_id,
            "nickname": nickname,
            "channel_id": channel_id,
            "custom": custom,
            "X": X,
            "Y": Y,
            "Z": Z
        }
    
    @classmethod
    def connect(cls, user_id, status, custom=None):
        data = {
            "type": cls.CONNECT,
            "user_id": user_id,
            "status": status,
        }
        if status == 200:
            data["custom"] = custom
        return data

    @classmethod
    def chat(cls, user_id, nickname, msg):
        return {
            "type": cls.CHAT,
            "user_id": user_id,
            "nickname": nickname,
            "msg": msg
        }
    
    @classmethod
    def action(cls, user_id, custom, direction, X, Y, Z):
        return {
            "type": cls.ACTION,
            "user_id": user_id,
            "custom": custom,
            "dir": direction,
            "X": X,
            "Y": Y,
            "Z": Z
        }
    @classmethod
    async def broadcast(cls, app, channel, message):
        disconnet_user = list()
        for user, ws in app['websockets'][channel].items():
            try:
                await ws.send_json(message)
            except ConnectionResetError:
                app['logging'].disconnect_logging(user, user, channel)
                disconnet_user.append(user)
        for user in disconnet_user:
            del app['websockets'][channel][user]
            app['logging'].disconnect_logging(user, user, channel)
    