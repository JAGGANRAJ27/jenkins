pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/JAGGANRAJ27/jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    powershell '''
                        npm install
                    '''
                }
            }
        }
        stage('Run Jest Tests') {
            steps {
                script {
                    powershell '''
                        npx jest --ci --reporters=default --reporters=jest-junit
                    '''
                }
            }
        }
        stage('Run Stylelint') {
            steps {
                script {
                    powershell '''
                        npx stylelint "**/*.css" --fix
                    '''
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying website...'
                bat 'xcopy /E /I /Y * C:\\xampp\\htdocs\\jenkins_practice\\'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for errors.'
        }
    }
}
