class Message:
    CONNECT = "connect"
    CHAT = "chat"
    ACTION = "action"
    
    @classmethod
    def get_init_data(cls, data):
        user = data.get('user_id')
        channel = data.get('channel_id')
        nickname = data.get('nickname')
        X = data.get('X')
        Y = data.get('Y')
        return user, nickname, channel, X, Y
    
    @classmethod
    def set_init_data(cls, user_id, nickname, channel_id, X, Y):
        return {
            "user_id": user_id,
            "nickname": nickname,
            "channel_id": channel_id,
            "X": X,
            "Y": Y
        }
    
    @classmethod
    def connect(cls, user_id, status, X=None, Y=None):
        if status == 200:
            return {
                "type": cls.CONNECT,
                "user_id": user_id,
                "status": status,
                "X": X,
                "Y": Y
            }
        else:
            return {
                "type": cls.CONNECT,
                "user_id": user_id,
                "status": status
            }
    
    @classmethod
    def chat(cls, user_id, nickname, msg):
        return {
            "type": cls.CHAT,
            "user_id": user_id,
            "nickname": nickname,
            "msg": msg
        }
    
    @classmethod
    def action(cls, user_id, X, Y):
        return {
            "type": cls.ACTION,
            "user_id": user_id,
            "X": X,
            "Y": Y
        }
    @classmethod
    async def broadcast(cls, app, channel, message):
        for user, ws in app['websockets'][channel].items():
            await ws.send_json(message)
    