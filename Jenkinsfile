stage('Check Credentials') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub',
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
        )]) {
            bat '''
            echo Username=%DOCKER_USER%
            powershell -Command "Write-Host TokenLength:$($env:DOCKER_PASS.Length)"
            '''
        }
    }
}