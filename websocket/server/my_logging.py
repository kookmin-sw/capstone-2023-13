import logging


class Logging:
    def __init__(self, user_id, channel_id):
        self.user_id = user_id
        self.channel_id = channel_id
        self.logger = logging.getLogger()
        self.logger.setLevel(logging.INFO)
        self.file_handler = logging.FileHandler('access.log')
        formatter = logging.Formatter('%(asctime)s-%(levelname)s-%(message)s')
        self.file_handler.setFormatter(formatter)
        self.logger.addHandler(self.file_handler)
    
    def format(self, msg):
        return f"[{self.channel_id}]{self.user_id} : {msg}"

    def connect_logging(self, status):
        if status == 200:
            self.logger.info(self.format('Connect Success'))
        else:
            self.logger.info(self.format('Connect Fail'))
    
    def disconnect_logging(self):
        self.logger.info(self.format('Disconnect Success'))
