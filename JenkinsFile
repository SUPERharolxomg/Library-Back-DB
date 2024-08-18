pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_IMAGE = 'superharolxomg/library-back-db'
        DOCKER_REGISTRY = 'docker.io'
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/SUPERharolxomg/Library-Back-DB.git'
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
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
                    docker.withRegistry("https://${DOCKER_REGISTRY}", DOCKER_CREDENTIALS_ID) {
                        docker.image(DOCKER_IMAGE).push('latest')
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
