import logging


class Logging:
    def __init__(self):
        self.logger = logging.getLogger()
        self.logger.setLevel(logging.DEBUG)
        self.file_handler = logging.FileHandler('access.log')
        formatter = logging.Formatter('%(asctime)s - %(message)s')
        self.file_handler.setFormatter(formatter)
        self.logger.addHandler(self.file_handler)
    
    def format(self, user_id, channel_id, msg):
        return f"[{channel_id}]{user_id} : {msg}"

    def connect_logging(self, status, user_id, channel_id):
        if status == 200:
            self.logger.debug(self.format(user_id, channel_id, 'Connect Success'))
        else:
            self.logger.debug(self.format(user_id, channel_id, 'Connect Fail'))
    
    def disconnect_logging(self, user_id, channel_id):
        self.logger.debug(self.format(user_id, channel_id, 'Disconnect Success'))
