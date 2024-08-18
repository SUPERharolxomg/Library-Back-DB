pipeline {
    agent any
    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/SUPERharolxomg/Library-Back-DB.git'
            }
        }
        stage('Construir Imagen Docker') {
            steps {
                script {
                    docker.build("superharolxomg/library-back-db")
                }
            }
        }
        stage('Loguearse en Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", DOCKER_CREDENTIALS_ID) {
                        echo 'Logueado en Docker Hub'
                    }
                }
            }
        }
        stage('Publicar Imagen en Docker Hub') {
            steps {
                script {
                    def customImage = docker.image("superharolxomg/library-back-db")
                    customImage.push("${env.BUILD_NUMBER}")
                    customImage.push("latest")
                }
            }
        }
    }
}
