from PyQt5.QtWidgets import *
from PyQt5.uic import loadUi
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtCore import pyqtSignal, pyqtSlot
from socket import *
from threading import *
import sys


class MainScreen(QMainWindow):
    
    def __init__(self):
        super().__init__()
        loadUi("./client.ui", self)
        
        self.N = 28
        self.user_id = ""
        self.channel_id = ""
        self.X = 0
        self.Y = 0
        self.board = [['O' for _ in range(self.N)] for _ in range(self.N)]
        self.userIdEdit.textChanged.connect(self.changeTextUserId)
        self.channelIdEdit.textChanged.connect(self.changeTextChannelId)
        self.XEdit.textChanged.connect(self.changeTextX)
        self.YEdit.textChanged.connect(self.changeTextY)
        self.connectButton.clicked.connect(self.clickConnect)
    
    def keyPressEvent(self, e):
        if e.key() == Qt.Key.Key_Escape:
            self.close()
        elif e.key() == Qt.Key.Key_A:
            if self.X - 1 < 0:
                return
            else:
                self.board[self.Y][self.X] = 'O'
                self.X -= 1
        elif e.key() == Qt.Key.Key_W:
            if self.Y - 1 < 0:
                return
            else:
                self.board[self.Y][self.X] = 'O'
                self.Y -= 1
        elif e.key() == Qt.Key.Key_D:
            if self.X + 1 >= self.N:
                return
            else:
                self.board[self.Y][self.X] = 'O'
                self.X += 1
        elif e.key() == Qt.Key.Key_S:
            if self.Y + 1 >= self.N:
                return
            else:
                self.board[self.Y][self.X] = 'O'
                self.Y += 1
        self.board[self.Y][self.X] = 'M'
        self.boardEdit.clear()
        for i in range(self.N):
            s = ' '.join(self.board[i])
            self.boardEdit.append(s)
    
    def changeTextUserId(self):
        self.user_id = self.userIdEdit.text()
    
    def changeTextChannelId(self):
        self.channel_id = self.channelIdEdit.text()
        
    def changeTextX(self):
        self.X = int(self.XEdit.text())
        
    def changeTextY(self):
        self.Y = int(self.YEdit.text())

    def clickConnect(self):
        print("Connect")
        self.board[self.Y][self.X] = 'M'
        for i in range(self.N):
            s = ' '.join(self.board[i])
            self.boardEdit.append(s)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    myWindow = MainScreen()
    myWindow.show()
    app.exec_()
