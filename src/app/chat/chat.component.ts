import { Component } from '@angular/core';


interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  newMessage: Message = {
    id: 0,
    sender: '',
    content: '',
    timestamp: new Date()
  };

  sendMessage() {
    if (this.newMessage.sender.trim() !== '' && this.newMessage.content.trim() !== '') {
      this.newMessage.id = this.messages.length + 1;
      this.messages.push({ ...this.newMessage });
      this.newMessage.content = '';
    }
  }

  deleteMessage(id: number) {
    const index = this.messages.findIndex(message => message.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }
}
