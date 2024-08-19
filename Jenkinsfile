pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = 'https://index.docker.io/v1/'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
    }
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
                withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID, url: DOCKER_REGISTRY]) {
                    // No necesitas usar 'docker login' explícitamente aquí
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry(DOCKER_REGISTRY, DOCKER_CREDENTIALS_ID) {
                        sh 'docker push superharolxomg/library-back-db'
                    }
                }
            }
        }
    }
}
