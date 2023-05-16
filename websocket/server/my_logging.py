import logging


class Logging:
    def __init__(self):
        self.logger = logging.getLogger()
        self.logger.setLevel(logging.DEBUG)
        self.file_handler = logging.FileHandler('access.log')
        formatter = logging.Formatter('%(asctime)s - %(message)s')
        self.file_handler.setFormatter(formatter)
        self.logger.addHandler(self.file_handler)
    
    def format(self, type, user_id, nickname, channel_id, msg):
        return f"[{channel_id}]{nickname}({user_id}) : {msg}({type})"

    def connect_logging(self, status, user_id, nickname, channel_id, custom=None):
        if status == 200:
            self.logger.debug(self.format('connect', user_id, nickname, channel_id, f'custom: {custom} - Connect Success'))
        else:
            self.logger.debug(self.format('connect', user_id, nickname, channel_id, 'Connect Fail'))
    
    def disconnect_logging(self, user_id, nickname, channel_id):
        self.logger.debug(self.format('connect', user_id, nickname, channel_id, 'Disconnect Success'))

    def chat_logging(self, user_id, nickname, channel_id, msg):
        self.logger.debug(self.format('chat', user_id, nickname, channel_id, msg))

    def action_logging(self, user_id, nickname, channel_id, direction, X, Y, Z):
        self.logger.debug(self.format('action', user_id, nickname, channel_id, f"{direction}, {X}, {Y}, {Z}"))
