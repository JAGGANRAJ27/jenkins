pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/JAGGANRAJ27/jenkins.git'
            }
        }
        stage('Build') {
            steps {
                echo 'No Build Required for Static Website'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing HTML, CSS, and JavaScript'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying website...'
                bat 'copy -r * C:\\xampp\\htdocs\\jenkins_practice\\'
            }
        }
    }
}
