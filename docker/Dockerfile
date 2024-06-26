# production environment

FROM nginx:1.15.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=sound_sunny:builder /projects/web/sound-sunny/dist /var/www
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
