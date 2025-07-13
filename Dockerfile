FROM node:18
WORKDIR /app
COPY backend ./backend
RUN npm install --prefix backend
CMD ["node", "backend/app.js"]
