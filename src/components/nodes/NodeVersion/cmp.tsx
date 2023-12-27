import React, { memo, useMemo } from 'react'
import { StyledVersionIcon } from './styles'
import Tooltip from '../../common/Tooltip'
import Icon from '../../common/Icon'

export type NodeLastVersions = {
  latest: string | null
  prerelease: string | null
  outdated: string | null
}

export type NodeVersionProps = {
  version: string
  lastVersion?: NodeLastVersions
}

/**
 * Strips away the extra commit number and hash from the "git describe --tags" output
 *
 * @param {String} gitTag The output of a "git describe --tags" command
 * @returns The tag name without the extra commit number and hash
 */
function stripExtraTagDescription(gitTag: string) {
  return gitTag.replace(/-\d+-g\w{7}$/gi, '')
}

function isNodeExperimental(
  version: string,
  lastVersion: NodeLastVersions,
): boolean {
  const closestTag = stripExtraTagDescription(version || '')

  return closestTag !== version && closestTag === lastVersion.prerelease
}

function isNodeLatest(version: string, lastVersion: NodeLastVersions) {
  return version === lastVersion.latest
}

function isNodePrerelease(version: string, lastVersion: NodeLastVersions) {
  return version === lastVersion.prerelease
}

function isNodeUptodate(version: string, lastVersion: NodeLastVersions) {
  return (
    isNodeLatest(version, lastVersion) ||
    isNodePrerelease(version, lastVersion) ||
    isNodeExperimental(version, lastVersion)
  )
}

function isNodeOutdated(version: string, lastVersion: NodeLastVersions) {
  return lastVersion.outdated === version
}

export const NodeVersion = ({ version, lastVersion }: NodeVersionProps) => {
  const versionStatus = useMemo(() => {
    if (!lastVersion) return -1

    return isNodeUptodate(version, lastVersion) &&
      !isNodeExperimental(version, lastVersion)
      ? 1
      : isNodeOutdated(version, lastVersion) ||
        isNodeExperimental(version, lastVersion)
      ? 0.5
      : 0
  }, [version, lastVersion])

  const versionLabel = useMemo(() => {
    if (!lastVersion) return ''

    return isNodeLatest(version, lastVersion)
      ? 'latest'
      : isNodePrerelease(version, lastVersion)
      ? 'prerelease'
      : isNodeExperimental(version, lastVersion)
      ? 'experimental'
      : isNodeOutdated(version, lastVersion)
      ? 'outdated'
      : 'obsolete'
  }, [version, lastVersion])

  const data = (
    <div tw="inline-flex gap-3 items-center whitespace-nowrap">
      <StyledVersionIcon $status={versionStatus} />
      {version || '-'}
    </div>
  )

  return (
    <>
      {versionStatus < 1 ? (
        <Tooltip
          my="top-center"
          at="bottom-center"
          offset={{ x: 0, y: 10 }}
          content={versionLabel}
        >
          <div tw="inline-flex items-center gap-2">
            {data} <Icon name="info-circle" size="sm" />
          </div>
        </Tooltip>
      ) : (
        data
      )}
    </>
  )
}
NodeVersion.displayName = 'NodeVersion'

export default memo(NodeVersion) as typeof NodeVersion
