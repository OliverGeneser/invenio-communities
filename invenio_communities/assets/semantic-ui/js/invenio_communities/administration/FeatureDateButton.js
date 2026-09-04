/*
 * SPDX-FileCopyrightText: 2026 CERN.
 * SPDX-License-Identifier: MIT
 */

import PropTypes from "prop-types";
import { DateTime } from "luxon";
import { Button } from "semantic-ui-react";
import { i18next } from "@translations/invenio_communities/i18next";

export const FeatureDateButton = ({ setFieldValue }) => (
  <Button
    type="button"
    size="small"
    onClick={() =>
      setFieldValue("start_date", DateTime.now().toFormat("yyyy-LL-dd HH:mm"))
    }
  >
    {i18next.t("Today")}
  </Button>
);

FeatureDateButton.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};
