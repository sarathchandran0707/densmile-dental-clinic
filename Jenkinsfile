pipeline {
    agent any

    environment {
        IMAGE_NAME = "sarathchandran0707/densmile-dental-clinic:v1"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'develop',
                url: 'https://github.com/sarathchandran0707/densmile-dental-clinic.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat 'echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'docker push %IMAGE_NAME%'
            }
        }
    }
}