class Message:
    CONNECT = "connect"
    CHAT = "chat"
    ACTION = "action"
    
    @classmethod
    def connect(cls, user_id, status):
        return {
            "type": cls.CONNECT,
            "user_id": user_id,
            "status": status
        }
    
    @classmethod
    def chat(cls, user_id, msg):
        return {
            "type": cls.CHAT,
            "user_id": user_id,
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