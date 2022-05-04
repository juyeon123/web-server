
    server {
      listen 80 ;
      server_name _;

      location /cluster {
        proxy_pass http://192.168.10.3:8080/;
	proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_http_version 1.1;
      }
    }
