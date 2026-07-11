pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'develop',
                url: 'https://github.com/sarathchandran0707/densmile-dental-clinic.git'
            }
        }

        stage('List Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t densmile-dental-clinic:v1 .'
            }
        }
    }
}